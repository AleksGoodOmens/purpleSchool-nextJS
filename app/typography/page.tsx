import { Button, HTag } from '@/components';

function page() {
	return (
		<>
			<div>
				<HTag tag="h1">header h1</HTag>
				<HTag tag="h2">header h2</HTag>
				<HTag tag="h3">header h3</HTag>
			</div>
			<div>
				<Button appearance="primary">primary</Button>
				<Button appearance="ghost">ghost</Button>
				<Button
					appearance="primary"
					arrow="down">
					primary with arrow
				</Button>

				<Button
					appearance="ghost"
					arrow="down">
					ghost with arrow
				</Button>
			</div>
		</>
	);
}

export default page;
