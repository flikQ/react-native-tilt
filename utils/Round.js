/**
 * Round
 */

export default function Round (value) {
  if (!value) return 0;

  return Math.floor((value * 100)) + 1;
}
