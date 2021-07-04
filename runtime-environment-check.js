class Runtime {
	constructor() {}

	get environment() {
		try {
			process
			return "nodejs"
		} catch (e) {
			try {
				Deno
				return "deno"
			} catch (e) {
				console.warn("Environment could not be determined!\n" +
							"If you are the maintainer of this project\n" +
							"please file an issue at https://github.com/CyberDie22/runtime-environment-checker/issues\n" +
							"with your environment, and I will try to get it fixed as soon as possible")
			}
		}
		return "unknown"
	}

	get args() {
		switch (this.environment) {
			case "nodejs":
				return process.argv.slice(2)
			case "deno":
				return Deno.args
			default:
				console.warn("Returning empty arguments list, when there may be arguments, as the runtime environment could not be determined")
				return []
		}
	}
}

export const runtime = new Runtime()
