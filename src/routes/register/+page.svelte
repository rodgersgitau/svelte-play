<div
	class="fixed w-full left-[50%] sm:max-w-screen-sm top-[50%] translate-x-[-50%] translate-y-[-50%]"
>
	<div
		class="relative flex flex-col w-full h-full gap-8 p-10 sm:p-20 bg-[whitesmoke]/10 shadow shadow-primary-700/60 rounded-md"
	>
		<h2 class="text-2xl font-black uppercase text-primary-500">Register</h2>

		<form method="POST">
			<div class="flex flex-col gap-8">
				<div class="flex flex-col gap-2">
					<label for="username">Username</label>
					<input class="p-4" type="text" id="username" name="username" required />
				</div>

				<div class="flex flex-col gap-2">
					<label for="password">Password</label>
					<input class="p-4" type="password" id="password" name="password" required />
				</div>

				<button class="btn btn-lg text-on-surface-token bg-surface-700" type="submit">Login</button>
			</div>
		</form>
		<div class="flex items-center gap-2">
			<span>Already have an account?</span>
			<a class="anchor text-primary-900" href="/login">Login</a>
		</div>
	</div>
</div>
