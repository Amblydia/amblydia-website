export function renderTagStyle(type: string) {
	switch (type) {
		case "test":
			return "text-[#fff]";
		case "another":
			return "";
		default:
			return "";
	}
}
