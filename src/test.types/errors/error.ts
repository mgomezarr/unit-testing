export const errorHere = (TNT?: string) => {
    if (TNT) {
        throw new SyntaxError();
    } else {
        return null;
    }
  };