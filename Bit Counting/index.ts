export function countBits(n: number): number {
	return n.toString(2).replaceAll("0", "").length;
}
