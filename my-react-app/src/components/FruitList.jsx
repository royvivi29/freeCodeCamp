export default function FruitList(){
    const fruits = ['Apple', 'Banana','Cherry', 'Date'];
    return (
        <ul>
            {fruits.map((fruit, index) =>(
                <li key={`${fruit}-${index}`}>{fruit}</li>
            ))}
        </ul>
    )
}