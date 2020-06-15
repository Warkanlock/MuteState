declare namespace Mute {
  /**
   * Get the latest element added
   */
  export function latest(): {};

  /**
   * Get the latest N numbers
   * @param {number} index Steps to go back
   */
  export function latestN(index: number): {};

  /**
   * Get all the object inside the container
   */
  export function getAll(): [];

  /**
   * Get an object using an index
   * @param {number} index
   */
  export function get(index: number): {} | Error;

  /**
   * Mutate the state using an initial value
   * @param initialValue
   */
  export function mutate(value: {}): {};
}

export = Mute;
