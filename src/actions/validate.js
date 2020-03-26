export const validateTitle = values => {
    const title = typeof values.name !== 'undefined' ? values.name.trim() : '';
    const minLength = 3;
    const maxLength = 50;

    if (!title) {
        return 'Title field is required';
    } else if (title.length < minLength || title.length > maxLength) {
        return 'The length of title should be between 3 and 50 characters';
    }
    return '';
};

export const validateDescription = values => {
    const description = typeof values.description !== 'undefined' ? values.description.trim() : '';
    const minLength = 3;
    const maxLength = 250;

    if (!description) {
        return 'Description field is required';
    } else if (description.length < minLength || description.length > maxLength) {
        return 'The length of description should be between 3 and 50 characters';
    }
    return '';
};

export const validate = values => {
    const titleError = validateTitle(values);
    const descriptionError = validateDescription(values);

    if (titleError && descriptionError) {
        return `${titleError}. ${descriptionError}`;
    } else if (titleError && !descriptionError) {
        return `${titleError}`;
    } else if (!titleError && descriptionError) {
        return `${descriptionError}`;
    }
    return '';
};
