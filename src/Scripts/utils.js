export const getCustomClass = (variant) => {
    switch (variant) {
        case 'product-dropdown':
            return 'product--dropdown';
        case 'about-dropdown':
            return 'about--dropdown';
        case 'about-background':
            return 'about--background';

        default:
            return '';
    }

}