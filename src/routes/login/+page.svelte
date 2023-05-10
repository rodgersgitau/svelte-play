<div
	class="fixed w-full left-[50%] sm:max-w-screen-sm top-[50%] translate-x-[-50%] translate-y-[-50%]"
>
	<div class="relative flex flex-col w-full h-full gap-8 px-10 sm:px-0">
		<h2 class="text-2xl font-black uppercase text-secondary-900-50-token">Login</h2>

		<form method="POST">
			<div class="flex flex-col gap-8">
				<hgroup class="space-y-2">
					<label class="text-base capitalize text-neutral-700" for="username">Username</label>
					<input
						class="w-full p-4 rounded-md input"
						type="text"
						id="username"
						name="username"
						required
					/>
				</hgroup>

				<hgroup class="space-y-2">
					<label class="text-base capitalize text-neutral-700" for="password">Password</label>
					<input
						class="w-full p-4 rounded-md input"
						type="password"
						id="password"
						name="password"
						required
					/>
				</hgroup>

				<button class="btn btn-lg text-on-secondary-token bg-secondary-backdrop-token" type="submit"
					>Login</button
				>
			</div>
		</form>
		<p>
			Don't have an account? <a class="anchor text-secondary-900-50-token" href="/register"
				>Register</a
			>
		</p>
	</div>
</div>
