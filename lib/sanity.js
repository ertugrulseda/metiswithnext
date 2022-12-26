import {
	createClient,
	createImageUrlBuilder,
	createPortableTextComponent,
	createPreviewSubscriptionHook
} from 'next-sanity';

export const config = {
	projectId: 'yhb2qwz0',
	dataset: 'production',
	apiVersion: '2021-10-21', // Learn more: https://www.sanity.io/docs/api-versioning
	useCdn: true
};

export const sanityClient = createClient(config);
export const usePrevirewSubscription = createPreviewSubscriptionHook(config);
export const urlFor = (source) =>
	createImageUrlBuilder(config).image(source).quality(40).auto("format")
export const PortableText = createPortableTextComponent({
	...config,
	serializers: {}
});
