import { describe, it } from 'vitest';
import { GithubApi } from '~/routes/github/[user]/[repo]/github-api';

describe('github-api', () => {
  describe('getRepository', () => {
    it.todo('should return repository information', async ({ expect }) => {
      const api = new GithubApi(undefined);
      const response = await api.getRepository('mhevery', 'qwik');
      expect(response).toMatchSnapshot();
    });
    it.todo('should timeout after x seconds with time out response');
  });
});
