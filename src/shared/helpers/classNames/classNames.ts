export type Mods = Record<string, string | boolean | undefined>;

/**
 * Allows to work more efficiently with classnames
 * @param cls Main classname
 * @param mods Mods object that allows to add classnames conditionally. For example: { cls.isLoading: isLoading }
 * @param additional Array of additional classnames
 * @return className. For example cn('Button', {disabled: isDisabled}, ['somethingElse']) => 'Button disabled somethingElse'
 */
export function cn(cls: string, mods?: Mods, additional?: Array<string | undefined>): string {
    let addClasses: Array<string | undefined> = [];
    let modsClasses: Mods = {};
    if (additional) {
        addClasses = [...additional.filter(Boolean)];
    }
    if (!mods) {
        modsClasses = {};
    } else {
        modsClasses = { ...mods };
    }
    return [
        cls,
        ...Object.entries(modsClasses)
            .filter(([_, value]) => Boolean(value))
            .map(([className, _]) => className),
        ...addClasses, // это нужно чтобы отчистить массив от falsy значений
    ]
        .join(" ")
        .trim();
}
