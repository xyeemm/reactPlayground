import { PlaceAutocomplete } from '@/components/location/SearchLocation'
import { zodResolver } from '@hookform/resolvers/zod'
import { APIProvider } from '@vis.gl/react-google-maps'

import { Controller, FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import EmailField from './EmailField'
import MessageField from './MessageField'
import NameField from './NameField'
const Form = () => {
	const onSubmit = (data: any) => {
		console.log(data)
	}
	const formSchema = z.object({
		name: z.string().min(2).max(100),
		email: z.email(),
		message: z.string().min(10).max(500),
		address: z.object({
			formattedAddress: z.string().min(2).max(100),
			city: z.string().max(100).optional(),
			country: z.string().min(2).max(100).optional(),
			postalCode: z.string().max(100).optional(),
			lat: z.number().min(-90).max(90).optional(),
			lng: z.number().min(-180).max(180).optional(),
		}),
	})
	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			message: '',
			address: {
				formattedAddress: '',
				city: '',
				country: '',
				postalCode: '',
				lat: 0,
				lng: 0,
			},
		},
	})
	return (
		<div>
			<FormProvider {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					{/* importing fields */}
					<NameField /> <br />
					<EmailField /> <br />
					<MessageField /> <br />
					<Controller
						name='address'
						control={form.control}
						render={({ field }) => (
							<APIProvider apiKey='AIzaSyDuUw9V5xqRwATLdYvBz2EK6Dy5LTJ4N4I'>
								<PlaceAutocomplete
									onPlaceSelect={(place) => {
										// 'place' should be the object returned from your search component
										// which now needs to include city, country, etc.
										field.onChange({
											formattedAddress: place.address,
											city: place.city,
											country: place.country,
											postalCode: place.postalCode,
											lat: place.lat,
											lng: place.lng,
										})
									}}
								/>
							</APIProvider>
						)}
					/>
				
					{form.formState.errors.address && (
						<p style={{ color: 'red' }}>Please select a valid address</p>
					)}
					<br />
					<button
						style={{
							backgroundColor: 'blue',
							color: 'white',
							padding: '10px 20px',
							borderRadius: '5px',
						}}
						type='submit'
					>
						Submit
					</button>
				</form>
			</FormProvider>
		</div>
	)
}

export default Form
