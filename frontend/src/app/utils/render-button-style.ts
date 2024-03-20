export function renderButtonStyle(type: string) {
	switch (type) {
		case "primary":
			return "flex items-center p-6 text-xl lg:text-lg lg:px-8 md:py-2 rounded-sm font-bold bg-secondary text-text transition ease-in-out hover:translate-y-[-5px]";
		case "secondary":
			return "px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100";
		default:
			return "px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900";
	}
}
