
interface practice {
    message: string;
    email: string;
    name: string
}
const Practice1 = ({obj}: {obj: practice}) => {
	return <div>
        <div>{obj.name}</div>
        <div>{obj.email}</div>
        <div>{obj.message}</div>
    </div>
}

export default Practice1;
