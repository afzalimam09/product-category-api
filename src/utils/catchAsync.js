// Function to catch errors
export default (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    };
};
