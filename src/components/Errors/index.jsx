// 该文件用于对后端传入错误信息的有效显示

const Errors = ({ error }) => {
    if (!error) {
        return null
    }
    return (
        <ul className="error-messages">
            <li>
                {error.message}
            </li>
        </ul>
    )
}

export default Errors