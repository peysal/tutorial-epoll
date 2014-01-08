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