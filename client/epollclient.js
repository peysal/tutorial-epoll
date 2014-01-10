Template.addquestion.events({
    'click input.add-question' : function(event){
        event.preventDefault();
        var questionText = document.getElementById("questionText").value;
        Meteor.call("addQuestion",questionText,function(error , questionId){
          console.log('added question with Id .. '+questionId);
        });
        document.getElementById("questionText").value = "";
 
    }
});

/** I think its ok for the client to be able to fetch data from db here. Read only perhaps? */
Questions = new Meteor.Collection("questions");
Template.questions.items = function(){
    return Questions.find({},{sort:{'submittedOn':-1}});
};