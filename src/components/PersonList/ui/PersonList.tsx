import { Button } from "@/components/ui/Button";
import Image from "next/image";
import cls from "./PersonList.module.scss";
import { Person } from "@prisma/client";
import { cn } from "@/shared/helpers/classNames/classNames";

/**
 * renders list of persons
 * @returns
 */
export const PersonList = ({ persons, className }: { persons: Person[]; className?: string }) => {
    return (
        <div data-testid="PersonList" className={cn(cls.listWrapper, {}, [className])}>
            {persons?.map((person) => (
                <div key={person?.id} className={cls.movieCard}>
                    <Image
                        width={85}
                        height={130}
                        src={`/static/images/persons/${person?.mainImage}`}
                        alt="movieImage"
                    />
                    <div>
                        <div className={cls.personName}>{person?.fullName}</div>
                        <Button href={`/person/${person.id}`} variant={"outline"} size={"sm"}>
                            Подробнее
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );
};
