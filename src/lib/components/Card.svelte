<script>
    let {  title, description, cardBg='bg-orange-500' } = $props()
</script>

<div class={`rounded-lg flex flex-col gap-2 items-center justify-center p-4 w-[30rem] h-[20rem] shadow-lg ${cardBg} `}>
    <h1 class="text-2xl font-bold">{title}</h1>
    <p>{description}</p>


</div>