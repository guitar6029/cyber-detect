<script lang="ts">

 const commitment = [
  {
    keyPoint: "Proactive Protection",
    description: "Identify and address threats before they cause harm.",
  },
  {
    keyPoint: "Swift Response",
    description: "Minimize damage and restore operations quickly.",
  }  ,
  {
    keyPoint: "Education and Training",
    description: "Empower your team to recognize and respond to threats.",
  }
  

 ]

</script>

<div class="flex flex-col gap-5 p-3">
    <h1 class="text-4xl">About Us</h1>
    <p>At Cyber Detect, we protect your digital assets from evolving cyber threats. Our expert team is dedicated to providing cutting-edge solutions and fast response times to keep you secure.</p>
    <ul class="list-disc list-inside">
        {#each commitment as { keyPoint, description}}
        <li>{keyPoint}: {description}</li>
        {/each}
    </ul>
</div>