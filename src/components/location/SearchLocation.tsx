import { useMapsLibrary } from '@vis.gl/react-google-maps'
import { useEffect, useRef } from 'react'
import { Input } from '../ui/input'

// Component for the Autocomplete input
export const PlaceAutocomplete = ({
	onPlaceSelect,
}: {
	onPlaceSelect: (place: any) => void
}) => {
	const inputRef = useRef<HTMLInputElement | null>(null)
	const places = useMapsLibrary('places')

	useEffect(() => {
		if (!places || !inputRef.current) return

		const autocomplete = new places.Autocomplete(inputRef.current, {
			fields: ['name', 'formatted_address', 'geometry', 'address_components'],
		})

		autocomplete.addListener('place_changed', () => {
			const place = autocomplete.getPlace()

			if (!place.geometry || !place.geometry.location) return

			const lat = place.geometry.location.lat()
			const lng = place.geometry.location.lng()
			// Helper to find specific parts of the address
			const getComp = (type: string) =>
				place.address_components?.find((c: any) => c.types.includes(type))
					?.long_name || ''
			onPlaceSelect({
				name: place.name,
				address: place.formatted_address,
				city: getComp('locality'),
				country: getComp('country'),
				postalCode: getComp('postal_code'),
				lat,
				lng,
			})
		})
	}, [places, onPlaceSelect])

	return <Input ref={inputRef} placeholder='Search address...' />
}
