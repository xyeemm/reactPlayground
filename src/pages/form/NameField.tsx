
import { Input } from '@/components/ui/input'
import { Controller, useFormContext } from 'react-hook-form'

const NameField = () => {
	const { control } = useFormContext()
	return (
		<div>
			<Controller
				name='name'
				control={control}
				render={({ field }) => (
					<>
						<label htmlFor='name'>Name</label>
						<Input type='text' id='name' {...field} />
					</>
				)}
			/>
		</div>
	)
}

export default NameField
