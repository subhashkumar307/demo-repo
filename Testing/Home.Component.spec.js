describe('Home Component Test', function(){
    it('Title Test', function(){
        expect(title("Amazon Shopping")).toBe("Amazon Shopping");
    })
    it('Addition Test', function(){
        expect(addition(10,30)).toBe(40);
    })
})