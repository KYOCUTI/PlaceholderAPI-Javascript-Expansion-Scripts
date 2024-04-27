// This .JS Script Shows The Player's Current Coordinates Live!


import me.clip.placeholderapi.expansion.PlaceholderExpansion;
import org.bukkit.entity.Player;

public class PlayerCoordinatesPlaceholder extends PlaceholderExpansion {

    @Override
    public String getIdentifier() {
        return "playercoordinates";
    }

    @Override
    public String getAuthor() {
        return "YourName";
    }

    @Override
    public String getVersion() {
        return "1.0";
    }

    @Override
    public String onRequest(Player player, String identifier) {
        if (player == null) {
            return "";
        }

        if (identifier.equals("xyz")) {
            return player.getLocation().getX() + ", " + player.getLocation().getY() + ", " + player.getLocation().getZ();
        }

        return null;
    }
}
