<script lang="ts">
	let { onSubmit } = $props();
	let userForm: { name: string; email: string; message: string } = $state({
		name: '',
		email: '',
		message: ''
	});

	const handleSubmit = (e: Event) => {
		e.preventDefault();
		//call the emmitter
		onSubmit(userForm);
		//clear the form
		userForm = { name: '', email: '', message: '' };
	};
</script>

<form onsubmit={handleSubmit} class="flex flex-col gap-4">
	<label for="name" class="text-2xl">Name</label>
	<input
		type="text"
		name="name"
		id="name"
		bind:value={userForm.name}
		placeholder="Name"
		class="rounded-lg border-2 p-2 w-[50vw] max-w-[30rem]"
	/>
	<label for="email" class="text-2xl">Email</label>
	<input
		type="email"
		name="email"
		id="email"
		bind:value={userForm.email}
		placeholder="Email"
		class="rounded-lg border-2 p-2"
	/>
	<label for="message" class="text-2xl">Message</label>
	<textarea
		class="rounded-lg border-2 p-2"
		name="message"
		id="message"
		bind:value={userForm.message}
	></textarea>
	<button
		disabled={!userForm.name || !userForm.email}
		type="submit"
		class="rounded-lg bg-orange-500 p-4 font-bold text-white">Submit Inquiry</button
	>
</form>
