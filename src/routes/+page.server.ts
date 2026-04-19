import { db } from '$lib/server/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const keyPaper = await db.publication.findFirst({
		where: { doi: '10.1093/bioinformatics/bty198' }
	});
	return { keyPaper };
};
