export const stringRemoveCommandFromParams = (message) => {
    const array = message.content.split(' ');
                  array.shift();

    return `${array.join(" ")}`;
}