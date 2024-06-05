import { Button } from "../ui/Button";
import cls from "./SendReview.module.scss";

export const SendReview = () => {
    const handleSendReview = () => {
        if (user) {
            const fetchData = async () => {
                const data = await MockApi.postReview(user?.id, id, newReviewValue);
                return data;
            };

            // todo
            // надо чтобы с сервера приходили только комментарии к конкретному фильму
            fetchData().then((data) => setReviews(data));
        }
    };

    return (
        <div className={cls.newCommentForm}>
            <input
                type="text"
                placeholder="Введите комментарий"
                value={newReviewValue}
                onChange={handleNewReviewChange}
            />
            <Button onClick={handleSendReview}>Отправить</Button>
        </div>
    );
};
