<script>
    /** @type {import('./$types').PageData} */
    export let data;
    console.log("data", data);
</script>

<div class="p4">
    <section class="p4">
        <h2 class="h2">Ønsker du bilder fra meg?</h2>

        <p>Har jeg tatt bilder av deg eller ditt band på ett event som du ønsker å bruke? Fyll inn skjemaet under så blir vi enige.</p>
    </section>

    <section class="p4">
        <form method="POST">
            <fieldset>
                <legend class="legend">Kontaktinfo</legend>
                <label class="label">
                    <span>Navn</span>
                    <input type="text" class="input">
                </label>
                <label class="label">
                    <span>E-post</span>
                    <input type="email" class="input">
                </label>
                <label class="label">
                    <span>Mobilnummer</span>
                    <input type="text" class="input">
                </label>
            </fieldset>
            <fieldset>
                <legend class="legend">I hvilken anledning ble bildet tatt</legend>
                <label class="label">
                    <span>Velg arrangement</span>
                    <select name="" id="" class="select">
                        <option value="">Annet (beskriv under)</option>
                        {#each data.events as event}
                        <option value="{event.id}">{event.name}</option>
                        {/each}
                    </select>
                </label>
                <label class="label">
                    <span>Beskriv annet arrangement</span>
                    <input type="text" class="input">
                </label>
            </fieldset>

            <label class="label">
                <span>Beskriv bruk</span>
                <textarea class="textarea"></textarea>
            </label>

            <button class="btn btn-sm variant-filled"type="submit">Send</button>
        </form>

    </section>
</div>