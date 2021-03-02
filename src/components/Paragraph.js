const Paragraph = ( {children} ) => (

    <p className="lead">
       {children}
    </p>
)

Paragraph.defaultProps = {
    children: "Hello World!",
}

export default Paragraph;