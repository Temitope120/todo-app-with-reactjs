const header = {color: "blue", fontSize:"100px"};

export default function InlineStyledComponent() {
    return (
        // <h1 style={{color: "red", fontSize:"100px"}}> Inline component </h1>
        <h1 style={header}> Inline component </h1>
    )
}