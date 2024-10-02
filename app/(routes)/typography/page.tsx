/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { Button, HTag, PTag, Tag } from '@/components';
import { Stars } from '@/components/stars/Stars';
import { useState } from 'react';

function page() {
	const [rating, setRating] = useState(3); //test
	return (
		<div
			style={{
				display: 'flex',
				gap: '4rem',
				flexDirection: 'column',
				alignContent: 'center',
				justifyContent: 'center',
				alignItems: 'center',
				justifyItems: 'center',
				minHeight: '100vh',
				padding: '0 1rem'
			}}>
			<div style={{ display: 'flex', gap: '1rem' }}>
				<HTag tag="h1">header h1</HTag>
				<HTag tag="h2">header h2</HTag>
				<HTag tag="h3">header h3</HTag>
			</div>
			<div style={{ display: 'flex', gap: '1rem' }}>
				<Button appearance="primary">primary</Button>
				<Button appearance="ghost">ghost</Button>
				<Button
					appearance="primary"
					arrow="right">
					primary with arrow
				</Button>

				<Button
					appearance="ghost"
					arrow="down">
					ghost with arrow
				</Button>
			</div>
			<div style={{ display: 'grid', gap: '1rem' }}>
				<PTag appearance="s">
					paragraph small Lorem, ipsum dolor sit amet consectetur adipisicing
					elit. Quibusdam, voluptatum!
				</PTag>
				<PTag>
					paragraph medium Lorem, ipsum dolor sit amet consectetur adipisicing
					elit. Corporis, doloribus?
				</PTag>
				<PTag appearance="l">
					paragraph large Lorem ipsum dolor sit amet consectetur adipisicing
					elit. At, voluptatibus.
				</PTag>
			</div>
			<div style={{ display: 'flex', gap: '1rem' }}>
				<Tag bg="ghost">10</Tag>
				<Tag>Photoshop</Tag>
				<Tag
					type="link"
					bg="accent"
					href="google.com">
					Подготовка макетов
				</Tag>
				<Tag bg="success"> -10 000 ₽ </Tag>
				<Tag bg="error">hh.ru</Tag>
			</div>
			<div>
				<HTag tag="h4">Rating</HTag>
				editable
				<Stars
					rating={rating}
					setRating={setRating}
					isEditable
				/>
				basic
				<Stars rating={3} />
			</div>
		</div>
	);
}

export default page;
