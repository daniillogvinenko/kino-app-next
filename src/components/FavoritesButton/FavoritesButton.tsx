import { User } from "@/shared/types/types";
import { Button } from "../ui/Button";

interface FavoritesButtonProps {
    user?: User;
    id: string;
    addToFavorites?: () => void;
    removeFromFavorites?: () => void;
}

export const FavoritesButton = (props: FavoritesButtonProps) => {
    const { addToFavorites, id, removeFromFavorites, user } = props;

    if (!user) {
        return null;
    }

    if (user.favorites.includes(id)) {
        return (
            <Button onClick={removeFromFavorites} variant="outline" size="lg">
                Удалить из избранного
            </Button>
        );
    }

    return (
        <Button onClick={addToFavorites} variant="outline" size="lg">
            Добавить в избранное
        </Button>
    );
};
