/**
 * JAVASCRIPT FUNCTIONS THAT TESTS WINDOW SIZE AND CALLS CALLBACKS
 * Cascade from bigger to smaller, like:
 * 
 * xl(...) || lg(...) || sm(...) || min(...)
 */

const   _sm = 568,
        _md = 768,
        _lg = 1024,
        _xl = 1280;

function isFunction(variable){
    if (variable instanceof Function) {
        return true;
    }
    return false;
}
function addMatchSize(result, size) {
    if (result)
        result.match = size

    return result;
}
export function conditionalQueryCall() {
    const [ query, cb, ...parameters ] = arguments;

    const match = window.matchMedia(query);

    if (match.matches || query === false) {
        let result = cb
        if (isFunction(cb)) 
            result = cb(...parameters)
        return { result };
    }

    return false
}
export function conditionalMinWidthCall() {
    const [ width, cb, ...parameters ] = arguments;
    const query = width && "(min-width: " + (width) + "px)";

    return conditionalQueryCall(query, cb, ...parameters);
}
export function conditionalMaxWidthCall() {
    const [ width, cb, ...parameters ] = arguments;
    const query = width && "(max-width: " + (width - 1) + "px)";

    return conditionalQueryCall(query, cb, ...parameters);
}

export function min () {
    const [cb, ...parameters] = arguments;

    return addMatchSize(conditionalMaxWidthCall(_sm + 1, cb, ...parameters), 'min');

}
export function sm() {
    const [cb, ...parameters] = arguments;

    return addMatchSize(conditionalMinWidthCall(_sm, cb, ...parameters), 'sm');
}
export function md() {
    const [cb, ...parameters] = arguments;

    return addMatchSize(conditionalMinWidthCall(_md, cb, ...parameters), 'md');
}
export function lg() {
    const [cb, ...parameters] = arguments;

    return addMatchSize(conditionalMinWidthCall(_lg, cb, ...parameters), 'lg');
}
export function xl() {
    const [cb, ...parameters] = arguments;

    return addMatchSize(conditionalMinWidthCall(_xl, cb, ...parameters), 'xl');
}

export function max () {
    const [cb, ...parameters] = arguments;

    return addMatchSize(conditionalMinWidthCall(_xl - 1, cb, ...parameters), 'max');

}
export function rSm() {
    const [cb, ...parameters] = arguments;

    return addMatchSize(conditionalMaxWidthCall(_sm, cb, ...parameters), 'sm');
}
export function rMd() {
    const [cb, ...parameters] = arguments;

    return addMatchSize(conditionalMaxWidthCall(_md, cb, ...parameters), 'md');
}
export function rLg() {
    const [cb, ...parameters] = arguments;

    return addMatchSize(conditionalMaxWidthCall(_lg, cb, ...parameters), 'lg');
}
export function rXl() {
    const [cb, ...parameters] = arguments;

    return addMatchSize(conditionalMaxWidthCall(_xl, cb, ...parameters), 'xl');
}

export const sizes = {
    sm: _sm,
    md: _md,
    lg: _lg,
    xl: _xl
}