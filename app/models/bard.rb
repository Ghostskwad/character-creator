class Bard < ApplicationRecord
    # Define associations
    has_many :characters, as: :character_class
    has_many :users, through: :characters
  
    # Set constants
    MAX_STAT_SPREAD = 30
    MAX_STAT_VALUE = 20
    MIN_STAT_VALUE = 1
    MIN_CHARISMA_VALUE = 10
    MIN_DEXTERITY_VALUE = 5
  
    # Callback to randomize stats before a new Bard is created
    before_create :randomize_stats
  
    private
  
    def randomize_stats
      loop do # Ensures that all stats are greater than 0
        reset_stats
  
        remaining_points = MAX_STAT_SPREAD
        stats = {
          constitution: 0,
          charisma: 0,
          intelligence: 0,
          wisdom: 0,
          dexterity: 0,
          strength: 0
        }
  
        # Prioritize charisma and dexterity to ensure minimum values are met
        stats[:charisma] = rand(1..[remaining_points, MAX_STAT_VALUE - 5].min)
        stats[:charisma] = [stats[:charisma], MIN_CHARISMA_VALUE].max
        remaining_points -= stats[:charisma]
  
        stats[:dexterity] = rand(1..[remaining_points, MAX_STAT_VALUE - stats.values.sum].min)
        stats[:dexterity] = [stats[:dexterity], MIN_DEXTERITY_VALUE].max
        remaining_points -= stats[:dexterity]
  
        # Set remaining stats to 1 and subtract the value from the remaining points
        stats.keys.reject { |stat| [:charisma, :dexterity].include?(stat) }.each do |stat|
          stats[stat] = MIN_STAT_VALUE
          remaining_points -= stats[stat]
        end
  
        # Distribute any remaining points randomly among all stats that have not reached the maximum value of 20
        eligible_stats = stats.select { |k, v| v < MAX_STAT_VALUE }.keys
        if eligible_stats.any?
          eligible_stats.shuffle.each do |stat|
            points_per_stat = rand([remaining_points, 4].min)
            remaining_points -= points_per_stat
            stats[stat] += points_per_stat
          end
  
          # If there are any remaining points, distribute them one by one to eligible stats until all points are spent
          remaining_points %= eligible_stats.count
  
          eligible_stats.each do |stat|
            break if remaining_points == 0
  
            stats[stat] += 1
            remaining_points -= 1
          end
        end
  
        # Check if all stats have a value greater than zero
        if stats.values.all? { |value| value > 0 }
          # Set the randomized stats as attributes for the new Bard
          self.attributes = stats
          break
        end
      end
    end
  
    # Resets all stats to 0 before randomizing new stats if loop fails
    def reset_stats
      self.constitution = 0
      self.charisma = 0
      self.intelligence = 0
      self.wisdom = 0
      self.dexterity = 0
      self.strength = 0
    end
  end