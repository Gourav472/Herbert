const Icons = ({ IconName, className }) => {
    const IconList = {

    }

    return (
        <span className={`flex ${className}`}>
            {IconName && IconList[IconName]}
        </span>
    )
}

export default Icons;