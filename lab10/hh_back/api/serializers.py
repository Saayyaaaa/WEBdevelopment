from rest_framework import serializers

from .models import Company, Vacancy


class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    description = serializers.CharField()
    city = serializers.CharField()
    address = serializers.CharField()

    def create(self, validated_data):
        instance = Company.objects.create(
            name=validated_data.get("name"),
            description=validated_data.get("description"),
            address=validated_data.get("address"),
            city=validated_data.get("city")
        )

        return instance

    def update(self, instance, validated_data):
        instance.name = validated_data.get("name")
        instance.save()
        return instance

class CompanySerializer2(serializers.ModelSerializer):
    # description = serializers.CharField(read_only=True)
    # city = serializers.CharField(read_only=True)
    # address = serializers.CharField(read_only=True)
    user_id = serializers.IntegerField(read_only=True)
    class Meta:
        model = Company
        fields = ("id", "name", "description", "city", "address", "user_id")



class VacancySerializer(serializers.Serializer):

    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    description = serializers.CharField()
    salary = serializers.CharField()

    def create(self, validated_data):
        instance = Company.objects.create(
            name=validated_data.get("name"),
            description=validated_data.get("description"),
            salary=validated_data.get("salary"),
        )

        return instance

class VacancySerializer2(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = ("id", "name", "description", "salary")