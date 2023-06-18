export default async function router() {
    let hash = window.location.hash.slice(1);
    if(!hash) hash = 'home';

    let component = await import(`../pages/${hash}.js`);
    return component.default

}