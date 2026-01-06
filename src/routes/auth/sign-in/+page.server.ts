import { redirect, fail } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';


export const actions: Actions = {
  default: async ({ request, cookies }) => {
    const data = await request.formData();
    const email = data.get('email');

    if (typeof email !== 'string' || !email) {
      return fail(400, { error: 'Email wajib' });
    }


    // cookies.set('session', 'abc123', { path: '/' });

    throw redirect(302, '/');
  }
};


