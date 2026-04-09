import { Textarea } from '@/components/ui/textarea'
import { Controller, useFormContext } from 'react-hook-form'

const MessageField = () => {
	const { control } = useFormContext()
	return (
		<div>
			<Controller
				name='message'
				control={control}
				render={({ field, fieldState }) => (
					<>
						<label htmlFor='message' data-invalid={fieldState.invalid}>
							Message
						</label>
						<Textarea
							id='message'
							aria-invalid={fieldState.invalid}
							{...field}
						/>
						{fieldState.invalid && <span>{fieldState.error?.message}</span>}
					</>
				)}
			/>
		</div>
	)
}

export default MessageField
