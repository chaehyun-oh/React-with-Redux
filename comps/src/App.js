import Accordion from "./components/Accordion";

function App() {
    const items = [
        {
            id: 'whewe',
            label: 'Can I use React on a project?', content: 'You can use React on any project you want.'
        },
        {
            id: 'whewawegea',
            label: 'Can I use React on a project?', content: 'You can use JS on any project you want.'
        },
        {
            id: 'whewawe1e',
            label: 'Can I use React on a project?', content: 'You can use Vue.js on any project you want.'
        },
    ];

    return <Accordion items={items} />
}
export default App;