import { json, error } from '@sveltejs/kit';
import { DIRECTIONS, recommendationsFor, type Direction } from '$lib/server/recommendations';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params, url }) => {
	const pluginId = Number(params.id);
	if (!Number.isInteger(pluginId) || pluginId <= 0) throw error(400, 'Invalid plugin id');

	const limitParam = url.searchParams.get('limit');
	const limit = limitParam == null ? undefined : Number(limitParam);
	if (limit !== undefined && (!Number.isInteger(limit) || limit <= 0)) {
		throw error(400, 'Invalid limit');
	}

	const directionParam = (url.searchParams.get('direction') ?? 'both') as Direction;
	if (!DIRECTIONS.includes(directionParam)) throw error(400, 'Invalid direction');

	const recs = await recommendationsFor(pluginId, { limit, direction: directionParam });
	return json({ pluginId, direction: directionParam, recommendations: recs });
};
