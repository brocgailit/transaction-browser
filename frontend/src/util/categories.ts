const knownCategories: Record<string, {icon: string, color: string}> = {
    Transfer: { icon: 'fa-right-left', color: 'primary' },
    Shopping: { icon: 'fa-cart-shopping', color: 'secondary' },
    Travel: { icon: 'fa-suitcase', color: 'tertiary' },
    Gambling: { icon: 'fa-dice', color: 'danger'},
    Utilities: { icon: 'fa-bolt', color: 'warning'}
}

export const categories = new Proxy(knownCategories, {
    get(target, prop) {
        if (prop in target) return target[prop as string];
        return { icon: 'fa-question', color: 'grey'};
    }
});