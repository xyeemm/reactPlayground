import { Input } from '@/components/ui/input'
import { Controller, useFormContext } from 'react-hook-form'

const EmailField = () => {
	const { control } = useFormContext()
	return (
		<div>
			<Controller
				name='email'
				control={control}
				render={({ field, fieldState }) => (
					<>
					{/* label will not red if invalid because this label is not from shadcn */}
						<label htmlFor='email' aria-invalid={fieldState.invalid}>
							Email
						</label>
						<Input
							type='email'
							id='email'
							aria-invalid={fieldState.invalid}
							{...field}
						/>
						{fieldState.invalid && <span data-invalid={fieldState.invalid}>{fieldState.error?.message}</span>}
					</>
				)}
			/>

		</div>
	)
}

export default EmailField
