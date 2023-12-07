export function FormRequestImage({ params }) {
    return <form className="form" >


        <div class="field">
            <label class="label">Choose an API</label>
            <div class="control">
                <div class="select">
                    <select>
                        <option>Pexels API</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="field">
            <label class="label">Token</label>
            <div class="control has-icons-left has-icons-right">
                <input class="input" type="text" placeholder="Text input" value="bulma" />
                <span class="icon is-small is-left">
                    <i class="fa-solid fa-key"></i>
                </span>
            </div>
            <p class="help is-info"> <a href="https://www.pexels.com/pt-br/api/new/" target="_blank">
                Request an API key</a></p>
        </div>

        <div class="field">
            <label class="label">Search for</label>
            <div class="control has-icons-left has-icons-right">
                <input class="input" type="text" placeholder="Text input" />
                <span class="icon is-small is-left">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </span>
            </div>
            <p class="help">Separate with spaces</p>
        </div>
        <div>
            <span className="button is-small"> helloWord </span>
            <span className="button is-small"> helloWord </span>
            <span className="button is-small"> helloWord </span>
        </div>

        <div class="field">
            <label class="label">Maximum elements per request</label>
            <div class="control">
                <input class="button" type="number" placeholder="Text input" min={1} max={80} />
            </div>
        </div>

        <div class="field is-grouped">
            <div class="control">
                <button class="button is-link">Confirm</button>
            </div>
            <div class="control">
                <button class="button is-link is-light">Cancel</button>
            </div>
        </div>

    </form>
}