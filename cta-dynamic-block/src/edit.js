

import './editor.scss';

import { useBlockProps, RichText, MediaPlaceholder, BlockControls, __experimentalLinkControl as LinkControl } from '@wordpress/block-editor';

import { ToolbarGroup, ToolbarButton, Popover } from '@wordpress/components'

import { link } from '@wordpress/icons';

import { useState } from '@wordpress/element';

export default function Edit({attributes, setAttributes}) {
	console.log('cta attributes',attributes);

	const [ showLinkPopover, setShowLinkPopover ] = useState( false );
	const toggleLinkPopover = () => {
			setShowLinkPopover( ( state ) => ! state );
	};

	return (
		<>

		<BlockControls>

			<ToolbarGroup>
			<ToolbarButton
						icon={ link }
						label="Link"
						onClick={toggleLinkPopover}
						isPressed={showLinkPopover}
					/>
			</ToolbarGroup>
			{showLinkPopover && (
					<Popover>
						<LinkControl
							searchInputPlaceholder="Search here..."
							value={ attributes.link }
							onChange={ ( newLink ) => {
								console.log(newLink)
								setAttributes( { link: {...newLink, title: attributes.link.title || ""} } ) }
							}
						>
						</LinkControl>
					</Popover>
				)}
		</BlockControls>

		<div { ...useBlockProps() }>
		<div className='cta-image-container'>
					{attributes.image_url && attributes.image_id ? (
							<>
								<img src={attributes.image_url} />
								<button className="button-remove" onClick={() => setAttributes({image_url: "", image_id: null})}>Remove</button>
							</>
						) : (
								<MediaPlaceholder
										onSelect = {
											( image ) => {
												setAttributes( { image_url: image.url, image_id: image.id } );
											}
										}
										allowedTypes = { [ 'image' ] }
										multiple = { false }
										labels = { { title: 'CTA Image' } }
									>
								</MediaPlaceholder>
						)
					}
				</div>
			<div className='cta-text-container'>
				<RichText
					tagName='h2'
					allowedFormats={[]}
					value={attributes.heading}
					onChange={(heading) => setAttributes({heading})}
					placeholder='This is the headline'
				/>
				<RichText
					tagName='p'
					allowedFormats={[]}
					value={attributes.body}
					onChange={(body) => setAttributes({body})}
					placeholder='This is the body copy'
				/>
				<RichText
						tagName='div'
						className='wp-element-button'
						allowedFormats={[]}
						value={attributes.link.title}
						onChange={(newTitle) => setAttributes({link: {...attributes.link, title: newTitle}})}
						placeholder='Button text'
					/>
			</div>
		</div>
		</>
	);
}
