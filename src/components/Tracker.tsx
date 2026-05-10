import type { ReactNode } from "react";

interface TrackerProps {
	distance: number; // in km
	label?: string;
}
const _x = 20;

export const Tracker = ({ distance, label = "Daily Run" }: TrackerProps) => {
	return (
		<section className="p-4 border rounded-lg">
			<h2 className="text-xl font-bold">{label}</h2>
			<p>
				Distance covered: <span data-testid="distance">{distance}</span> km
			</p>
			{distance >= 10 && <p className="text-green-500">Goal Achieved!</p>}
		</section>
	);
};
