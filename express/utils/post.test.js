const { getContent, getTitle, readPost } = require('./post')


describe('getTitle', () => {
    const posts = [['Im-betting-on-SPAs.md', "I’m betting on SPAs"], ['kiasuism-vs-no8-wire.md', 'Kiasuism vs No.8 Wire' ], ['mediasuite-tech-stack.md', 'Media Suite Tech Stack']]
    test.each(posts)('return the title from the post file', (postName, expected) => {
      const postContent = readPost(postName)
      const actual = getTitle(postContent)
      expect(actual).toBe(expected)
  })
})

describe('getContent', () => {
  const posts = [['Im-betting-on-SPAs', "A brief history of the web"], ['mediasuite-tech-stack', 'React or Angular on the client']]
  test.each(posts)('return the title from the post file', (postName, expected) => {
    const actual = getContent(postName)
    expect(actual).toContain(expected)
  })
})



